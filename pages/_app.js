import "../styles/app.scss";

// Gizli bir "App" Component Nextjs sayfalarını (initialize eder) çalıştırır. Global css eklemek için _app.js dosyasını oluşturmamız ve global stylesheetleri buraya import etmemiz gerekir... (custom App olarak geçiyor...)

/* 

Next.js uses the App component to initialize pages. You can override it and control the page initialization. Which allows you to do amazing things like:

Persisting layout between page changes
Keeping state when navigating pages
Custom error handling using componentDidCatch
Inject additional data into pages
Add global CSS

*/

// ** Reacttaki App.js sayfası (initial page) arkaplanda gelen componentları ve propsları alarak, geriye tüm componentları döndürüyor.

// **  Pages klasörü içinde alt tire (_) ile başlayan dosyalar next tarafından okunmuyor.(kullanıcıya render edilmiyor. route olarak gözükmez!!!)

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
