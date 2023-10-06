import { Base64ToUrl, ImageToBase64 } from "../../helper/utility";

export async function confirmRoomBill(formData: FormData) {
  const data = formData.get("upload");
  if (data instanceof File) {
    const base64 = await ImageToBase64(data);
    console.log(base64);
    console.log(Base64ToUrl(base64));
  }
  console.log(formData);
}

export async function confirmGameBill(formData: FormData) {
  const data = formData.get("upload");
  if (data instanceof File) {
    const base64 = await ImageToBase64(data);
    console.log(base64);
    console.log(Base64ToUrl(base64));
  }
  console.log(formData);
}
