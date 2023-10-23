import createMiddleware from 'next-intl/middleware';
import {locales} from "./navigation";

export default createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'en',

    // Uncommenting the following line breaks routing
    // localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en)/:path*']
};