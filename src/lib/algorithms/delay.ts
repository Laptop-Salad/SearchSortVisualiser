export default function delay(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
