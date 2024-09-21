export default function isValidHttpUrl(text: string): boolean {
    let url;
    
    try {
      url = new URL(text);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
}