import Button from "@/components/btn";
import { useSidebar } from "./SidebarContext";

export default function SidebarToggleButton({ size = "md", style, ...props }) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      title=""
      btnType="icon"
      icon={{ start: "☰" }}
      onPress={toggleSidebar}
      size={size}
      style={style}
      {...props}
    />
  );
}
