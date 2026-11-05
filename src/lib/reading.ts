// 中文約每分鐘 400 字；排除程式碼區塊與標記符號
export function readingMinutes(body = ''): number {
	const text = body.replace(/```[\s\S]*?```/g, '').replace(/[#>*_`\[\]()!|-]/g, '').replace(/\s/g, '');
	return Math.max(1, Math.round(text.length / 400));
}
