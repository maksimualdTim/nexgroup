"use server";


export async function sendMessage(formData: FormData) {
    sendToAmoCRM(formData)
    return sendToTelegram(formData)
}

export async function sendToTelegram(formData: FormData) {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("comment");
    const product = formData.get("product") as string;
    const form_page = formData.get("form_page");

    if (!name || !phone) {
        return { error: "Заполните все поля" };
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;    

    const text = `📩 Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Сообщение: ${message}\n📦 Продукт: ${product}\n🌐 Страница: ${form_page}`;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text }),
    });    

    
    if (!response.ok) return { error: "Ошибка при отправке" };

    return { success: "✅ Успешно отправлено!" };
}

interface CustomFieldValue {
    field_id?: number;
    field_code?: string;
    values: { value: string }[];
}

interface Contact {
    first_name: FormDataEntryValue | null;
    custom_fields_values: CustomFieldValue[];
}

interface Metadata {
    category: string;
    form_id: number;
    form_name: string;
    form_page: FormDataEntryValue | null;
    referer: FormDataEntryValue | null;
    form_sent_at: number;
}

interface Embedded {
    metadata: Metadata;
    contacts: Contact[];
}

interface LeadParams {
    name: string;
    custom_fields_values?: CustomFieldValue[]; // ✅ добавляем это поле здесь!
    _embedded: Embedded;
}


export async function sendToAmoCRM(formData: FormData) {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("comment") as string;
    const product = formData.get("product") as string;
    const form_page = formData.get("form_page");
    const referer = formData.get("referer");

    if (!name || !phone) {
        return { error: "Заполните все поля" };
    }

    const params: LeadParams[] = [
        {
            name: "Новая заявка с сайта",
            _embedded: {
                metadata: {
                    category: "forms",
                    form_id: 123,
                    form_name: "Форма на сайте",
                    form_page: form_page,
                    form_sent_at: Math.floor(Date.now() / 1000),
                    referer: referer
                },
                contacts: [
                    {
                        first_name: name,
                        custom_fields_values: [
                            {
                                field_code: "PHONE",
                                values: [{ value: phone as string }]
                            }
                        ]
                    }
                ]
            }
        }
    ];

    if (product && product.length > 0) {
        params[0].custom_fields_values = [
            {
                field_id: 910167, // Список услуг
                values: [{ value: product }]
            }
        ];
    }

    const response = await fetch("https://newgroup.amocrm.ru/api/v4/leads/complex", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + process.env.AMOCRM_TOKEN,
            "User-Agent": "amoCRM-oAuth-client/1.0"
        },
        body: JSON.stringify(params)
    }).then(r => r.json());


    if (message && message.length > 0 && response[0]?.id) {
        const noteResponse = await fetch("https://newgroup.amocrm.ru/api/v4/leads/notes", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + process.env.AMOCRM_TOKEN,
                "User-Agent": "amoCRM-oAuth-client/1.0"
            },
            body: JSON.stringify([
                {
                    entity_id: response[0].id,
                    note_type: "common",
                    params: {
                        text: message
                    }
                }
            ])
        }).then(r => r.json());
        console.log(noteResponse);
    }

    return { success: "✅ Успешно отправлено!" };
}
