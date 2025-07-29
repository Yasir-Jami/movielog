import { useEffect, useState } from "react";

const userCookie: string = "user-id";

function getCookie(cname: string): string {
  let name: string = cname + "=";
  let decodedCookie: string = decodeURIComponent(document.cookie);
  let cookieArray: Array<string> = decodedCookie.split(';');
  
  for (let i = 0; i < cookieArray.length; i++) {
    let c: string = cookieArray[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

export function getUserCookie() {
  return getCookie(userCookie);
}

function generateUserCookie() {
  const url = `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_API_COOKIES}`;  

  useEffect(() => {
    const generateCookie = async () => {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        }
      });

      const responseData = await response.json();

      if (!response.ok) {
        logger.error("Error:", responseData);
        return;
      }

      else if (response.ok) {
        // Create a new list
        logger.log("Generated new cookie:", responseData);
      }

      else {
        logger.log("Server returned an invalid response.")
      }
    }

    generateCookie();
  }, []);

};

function Cookie() {
  let cookie: string = getCookie(userCookie);

  if (cookie.length == 0) {
    generateUserCookie();
    console.log("New User ID:", cookie);
  }
  
}

export default Cookie;