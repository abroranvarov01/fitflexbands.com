import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "whatafit-resistance-bands",
  "tribe-lifting-fabric-bands",
  "vergali-booty-bands",
  "wsakoue-pull-up-bands",
  "leekey-resistance-bands",
  "leg-stretcher-band",
  "theraband-resistance-bands",
  "theraband-professional-bands",
  "resistance-training-bands",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://fitmentorhub.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("tor", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/fit"],
};
