// 草稿在 dev 與 Cloudflare Pages 的預覽部署（非 master 分支）可見，正式站（master）不輸出。
// CF_PAGES_BRANCH 由 Cloudflare Pages 建置時提供；本機 build 沒有這個變數，視同正式站。
const branch = process.env.CF_PAGES_BRANCH;
export const showDrafts = import.meta.env.DEV || (branch !== undefined && branch !== 'master');
