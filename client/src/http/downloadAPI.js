import { $host } from "./index";

export const downloadRevit23 = async () => {
   try {
      const response = await $host.get('api/sendfile/revit23', {
         responseType: 'blob',
      })
      return response.data
   } catch (e) {
      console.log('Не удалось загрузить файл.', e)
      return null;
   }
}