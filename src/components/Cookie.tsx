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
      await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log("User ID from cookie route: ", data.userId);
      })
      .catch(err => logger.error("Cookie fetch error", err));
    }

    generateCookie();
  }, []);

};

function Cookie() {
  let cookie: string = getCookie(userCookie);
  console.log(cookie);
  console.log("Document cookies:", document.cookie);

  if (cookie.length == 0) {
    generateUserCookie();
    console.log("New User ID:", document.cookie);
  }

  console.log("Document cookies after:", document.cookie);
  
}

export default Cookie;