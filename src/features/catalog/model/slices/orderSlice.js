import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный Thunk для отправки заказа в Telegram
export const sendOrderToTelegram = createAsyncThunk(
  "order/sendOrderToTelegram",
  async (orderData, { rejectWithValue }) => {
    try {
      const telegramToken = "7678830937:AAHSkUEUdLJft_4307jbf5jufpWsTwRbP5M";
      const chatId = "903502069"; // Можно получить через @userinfobot в Telegram

      const message = `
        📦 *Новый заказ!*
        👤 *Имя:* ${orderData.customer.name}
        📞 *Телефон:* ${orderData.customer.phone}
        🏠 *Адрес:* ${orderData.customer.address}
        🛒 *Товары:*
        ${orderData.products
          .map(
            (item) =>
              `- ${item.name} ${item.text} ${item.text} ${item.count}шт. ${item.price}₽`
          )
          .join("\n")}
        💰 *Итого:* ${orderData.totalPrice} ₽
      `;

      const response = await axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Чтобы поддерживалось форматирование
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderToTelegram.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendOrderToTelegram.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendOrderToTelegram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Ошибка отправки заказа";
      });
  },
});

export default orderSlice.reducer;
