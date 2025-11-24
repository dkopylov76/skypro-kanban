// export function checkLs() {
//   try {
//     return window.localStorage.getItem("userInfo")
//       ? JSON.parse(window.localStorage.getItem("userInfo"))
//       : null
//   } catch {
//     return null
//   }
// }

export const checkLs = () => {
    const saved = localStorage.getItem("userInfo");
    return saved ? JSON.parse(saved) : null;
};



// export const checkLs = () => {
//     try {
//         const data = localStorage.getItem("userInfo");
//         return data ? JSON.parse(data) : null;
//     } catch (error) {
//         console.warn("Ошибка при чтении userInfo из localStorage:", error);
//         return null; // или дефолтное значение
//     }
// };