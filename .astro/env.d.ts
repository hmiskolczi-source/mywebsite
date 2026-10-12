declare module 'astro:env/client' {
	export const PUBLIC_GTM_ID: string | undefined;	
}declare module 'astro:env/server' {
	export const META_PIXEL_ID: string | undefined;	
	export const META_CAPI_ACCESS_TOKEN: string | undefined;	
	export const META_TEST_EVENT_CODE: string | undefined;	
}