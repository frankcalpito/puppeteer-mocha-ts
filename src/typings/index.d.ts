declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
            browser: any;
            expect: any;
            page: any;
            done: any;
            timeout: any;
        } 
    }
}

export {};