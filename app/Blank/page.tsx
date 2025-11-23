"use client";
import GeolocationComponent from "@/components/GeoLocationComponent";
export default function blank() {
  return (
    <>
      <GeolocationComponent />
    </>
  );
}
// import { useState } from "react";

// export default function EmailSender() {
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<{
//     type: "success" | "error" | null;
//     message: string;
//   }>({
//     type: null,
//     message: "",
//   });

//   const sendEmail = async () => {
//     setLoading(true);
//     setStatus({ type: null, message: "" });

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           to: "emmanuel.o.irabor@gmail.com",
//           subject: "Test Email",
//           message: "This is a test email sent from your Next.js app!",
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || "Failed to send email");
//       }

//       setStatus({
//         type: "success",
//         message: "Email sent successfully! ✓",
//       });
//     } catch (error) {
//       setStatus({
//         type: "error",
//         message:
//           error instanceof Error ? error.message : "Failed to send email",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Send Email</h1>

//         <button
//           onClick={sendEmail}
//           disabled={loading}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
//         >
//           {loading ? "Sending..." : "Send Email"}
//         </button>

//         {status.type && (
//           <div
//             className={`mt-4 p-4 rounded-lg ${
//               status.type === "success"
//                 ? "bg-green-100 text-green-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {status.message}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
