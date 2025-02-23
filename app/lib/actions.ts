"use server";


export async function sendMessage(formData: FormData) {
    return sendToTelegram(formData)
}

export async function sendToTelegram(formData: FormData) {
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("comment");

    if (!name || !phone) {
        return { error: "Заполните все поля" };
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;    

    const text = `📩 Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Сообщение: ${message}`;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: text }),
    });    

    console.log(response);
    

    if (!response.ok) return { error: "Ошибка при отправке" };

    return { success: "✅ Успешно отправлено!" };
}