declare module "*.css";
declare module "*.jpg" {
  const src: string;
  export default src;
}

// Optional: Add other common image formats at the same time
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
