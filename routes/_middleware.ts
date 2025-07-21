/**
 * © 2025 nicolas-metivier.fr
 * This work was created by Nicolas Metivier.
 * All rights reserved. Reproduction, distribution, or use is restricted to Nicolas Metivier without prior permission.
 */

//LINK routes/_middleware.ts

import type { FreshContext, State } from "$types";
import { detectPreferredLang, isSupportedLang } from "$utils/i18n.ts";

/**
 * Handles incoming requests to determine the appropriate language for the response.
 * If the request pathname starts with "/assets/", "/images/", or "/_frsh/", it bypasses
 * language detection and proceeds with the next middleware.
 * If the first segment of the pathname is a supported language, it sets the language
 * in the context state and proceeds with the next middleware.
 * Otherwise, it detects the preferred language from the "accept-language" header,
 * constructs a redirect URL with the detected language, and redirects the client.
 *
 * @param req - The incoming request object.
 * @param ctx - The FreshContext object containing the state and other context information.
 * @returns A Response object or a Promise that resolves to a Response object.
 */
export function handler(
  req: Request,
  ctx: FreshContext<State>,
): Response | Promise<Response> {
  // Extract the pathname from the incoming request URL
  const { pathname } = new URL(req.url);

  // Check if the pathname starts with "/assets/", "/images/", or "/_frsh/"
  // If it does, bypass language detection and proceed with the next middleware
  const ignoredPaths = ["/assets/", "/images/", "/docs/", "/_frsh/"];

  if (ignoredPaths.some(prefix => pathname.startsWith(prefix))) {
    return ctx.next();
  }

  // Extract the first segment of the pathname, which may represent a language code
  const maybeLang = pathname.split("/")[1];

  // Check if the extracted segment is a supported language
  // If it is, set the language in the context state and proceed with the next middleware
  if (isSupportedLang(maybeLang)) {
    ctx.state.lang = maybeLang;
    return ctx.next();
  }

  // Retrieve the "accept-language" header from the request
  const acceptLang = req.headers.get("accept-language");

  // Detect the preferred language based on the "accept-language" header
  const lang = detectPreferredLang(acceptLang);

  // Construct a new URL for redirection
  const redirectUrl = new URL(req.url);

  // Prepend the detected language to the pathname of the redirect URL
  redirectUrl.pathname = `/${lang}${redirectUrl.pathname}`;

  // Redirect the client to the new URL with the detected language
  return Response.redirect(redirectUrl.toString(), 302);
}
