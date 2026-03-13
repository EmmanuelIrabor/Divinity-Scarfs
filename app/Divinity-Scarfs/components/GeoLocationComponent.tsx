// "use client";

// import { useState, useEffect } from "react";

// interface GeolocationData {
//   ip: string;
//   city: string;
//   region: string;
//   country: string;
//   country_name: string;
//   continent_code: string;
//   postal: string;
//   latitude: number;
//   longitude: number;
//   timezone: string;
//   org: string;
// }

// export default function GeolocationComponent() {
//   const [geoData, setGeoData] = useState<GeolocationData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchGeolocation = async () => {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         if (!response.ok) {
//           throw new Error("Failed to fetch geolocation data");
//         }
//         const data = await response.json();
//         setGeoData(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGeolocation();
//   }, []);

//   const getCurrencySymbol = (continentCode: string): string => {
//     if (continentCode === "AF") {
//       return "&#8358;"; // Naira
//     } else if (continentCode === "EU") {
//       return "&#8364;"; // Euro
//     } else if (continentCode === "AS") {
//       return "&#165;"; // Yuan
//     } else if (continentCode === "NA" || continentCode === "SA") {
//       return "&#36;"; // Dollar
//     } else {
//       return "&#36;"; // Default to Dollar
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <p className="text-xl text-gray-700">Loading your location...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
//         <p className="text-xl text-red-600">Error: {error}</p>
//       </div>
//     );
//   }

//   if (!geoData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100">
//         <p className="text-xl text-gray-700">No data available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Your Geolocation Data
//         </h1>

//         <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg text-center">
//           <p className="text-2xl font-bold text-gray-700">
//             Your Currency:{" "}
//             <span
//               className=""
//               dangerouslySetInnerHTML={{
//                 __html: getCurrencySymbol(geoData.continent_code),
//               }}
//             />
//           </p>
//         </div>

//         <div className="space-y-3">
//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">IP Address:</span>{" "}
//             <span className="text-gray-600">{geoData.ip}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">City:</span>{" "}
//             <span className="text-gray-600">{geoData.city}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Region:</span>{" "}
//             <span className="text-gray-600">{geoData.region}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Country:</span>{" "}
//             <span className="text-gray-600">
//               {geoData.country_name} ({geoData.country})
//             </span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Continent:</span>{" "}
//             <span className="text-gray-600">{geoData.continent_code}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Postal Code:</span>{" "}
//             <span className="text-gray-600">{geoData.postal}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Latitude:</span>{" "}
//             <span className="text-gray-600">{geoData.latitude}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Longitude:</span>{" "}
//             <span className="text-gray-600">{geoData.longitude}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">Timezone:</span>{" "}
//             <span className="text-gray-600">{geoData.timezone}</span>
//           </p>

//           <p className="text-lg">
//             <span className="font-semibold text-gray-700">
//               ISP/Organization:
//             </span>{" "}
//             <span className="text-gray-600">{geoData.org}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";

interface GeolocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  continent_code: string;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  org: string;
}

export default function GeolocationComponent() {
  const [geoData, setGeoData] = useState<GeolocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch geolocation data");
        }
        const data = await response.json();
        setGeoData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  const getCurrencySymbol = (continentCode: string): string => {
    if (continentCode === "AF") {
      return "&#8358;"; // Naira
    } else {
      return "&#8364;"; // Euro (default for all other continents)
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <p className="text-xl text-gray-700">Loading your location...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!geoData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100">
        <p className="text-xl text-gray-700">No data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Your Geolocation Data
        </h1>

        <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg text-center">
          <p className="text-2xl font-bold text-gray-700">
            Your Currency:{" "}
            <span
              className="text-4xl"
              dangerouslySetInnerHTML={{
                __html: getCurrencySymbol(geoData.continent_code),
              }}
            />
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-lg">
            <span className="font-semibold text-gray-700">IP Address:</span>{" "}
            <span className="text-gray-600">{geoData.ip}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">City:</span>{" "}
            <span className="text-gray-600">{geoData.city}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Region:</span>{" "}
            <span className="text-gray-600">{geoData.region}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Country:</span>{" "}
            <span className="text-gray-600">
              {geoData.country_name} ({geoData.country})
            </span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Continent:</span>{" "}
            <span className="text-gray-600">{geoData.continent_code}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Postal Code:</span>{" "}
            <span className="text-gray-600">{geoData.postal}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Latitude:</span>{" "}
            <span className="text-gray-600">{geoData.latitude}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Longitude:</span>{" "}
            <span className="text-gray-600">{geoData.longitude}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">Timezone:</span>{" "}
            <span className="text-gray-600">{geoData.timezone}</span>
          </p>

          <p className="text-lg">
            <span className="font-semibold text-gray-700">
              ISP/Organization:
            </span>{" "}
            <span className="text-gray-600">{geoData.org}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
// "use client";

// import { useState, useEffect } from "react";

// interface GeolocationData {
//   ip: string;
//   city: string;
//   region: string;
//   country: string;
//   country_name: string;
//   continent_code: string;
//   postal: string;
//   latitude: number;
//   longitude: number;
//   timezone: string;
//   org: string;
// }

// export default function GeolocationComponent() {
//   const [geoData, setGeoData] = useState<GeolocationData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchGeolocation = async () => {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         if (!response.ok) {
//           throw new Error("Failed to fetch geolocation data");
//         }
//         const data = await response.json();
//         setGeoData(data);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGeolocation();
//   }, []);

//   const getCurrencySymbol = (continentCode: string): string => {
//     if (continentCode === "AF") {
//       return "&#8358;"; // Naira
//     } else {
//       return "&#8364;"; // Euro (default for all other continents)
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <p className="text-xl text-gray-700">Loading your location...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
//         <p className="text-xl text-red-600">Error: {error}</p>
//       </div>
//     );
//   }

//   if (!geoData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100">
//         <p className="text-xl text-gray-700">No data available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <div className="text-center">
//           <p
//             className="text-6xl font-bold"
//             dangerouslySetInnerHTML={{
//               __html: getCurrencySymbol(geoData.continent_code),
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
