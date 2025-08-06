// 导入 clsx：用于条件性地合并类名
import { clsx, type ClassValue } from "clsx"
// 导入 tailwind-merge：用于智能合并 Tailwind CSS 类名，避免冲突
import { twMerge } from "tailwind-merge"

/**
 * cn (className) 工具函数
 * 
 * 这是 shadcn/ui 中的核心工具函数，用于智能合并 CSS 类名
 * 
 * @param inputs - 可以是字符串、对象、数组等多种类型的类名
 * @returns 合并后的类名字符串
 * 
 * 使用示例：
 * cn("px-2 py-1", "bg-blue-500") // "px-2 py-1 bg-blue-500"
 * cn("px-2", { "bg-red-500": true, "text-white": false }) // "px-2 bg-red-500"
 * cn("px-2 py-1", "px-4") // "py-1 px-4" (px-4 覆盖 px-2)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
