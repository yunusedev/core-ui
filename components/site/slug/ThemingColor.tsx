"use client";
import { Text } from "@/components/ui/Text";
import { Icon } from "@iconify/react/dist/iconify.js";
import allColors from "tailwindcss/colors";

export const ThemingColor = () => {
  const getColors = Object.entries(allColors)
    .map(([name, shade], i) => ({
      colorName: name,
      shade: shade,
      id: i,
    }))
    .filter(
      (item) =>
        item.colorName != "inherit" &&
        item.colorName != "current" &&
        item.colorName != "transparent" &&
        item.colorName != "black" &&
        item.colorName != "white"
    );
  return (
    <div className="flex flex-col gap-6">
      {getColors.map((item) => (
        <div className="flex flex-col gap-3" key={item.id}>
          <Text type="semiboldLg">
            {item.colorName.charAt(0).toUpperCase() + item.colorName.slice(1)}
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-11 gap-2">
            {Object.entries(item.shade).map(([name, color], i) => (
              <div className="relative flex flex-col gap-1" key={i}>
                <div className="h-16 relative transition group rounded-lg flex items-center justify-center border border-secondary-200 overflow-hidden">
                  <div className="absolute inset-0 rounded-inherit transition group-hover:opacity-60" style={{backgroundColor:color}} />
                  <span className="opacity-0 group-hover:opacity-100 relative text-foreground transition-all">
                    <Icon className="text-lg" icon={"solar:copy-outline"} />
                  </span>
                </div>
                <span className="text-center font-medium text-muted text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
