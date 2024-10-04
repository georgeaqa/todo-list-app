import { Pressable, PressableProps, Text } from "react-native";

type CustomButtonProps = PressableProps & {
  className?: string;
  tittle?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export default function CustomButton({
  className,
  tittle,
  iconLeft,
  iconRight,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      className={`flex-row gap-2 px-2 h-14 items-center border-2 rounded-3xl justify-center shadow-md shadow-black bg-white ${className}`}
      {...props}
    >
      {iconLeft && iconLeft}
      <Text className="font-bold">{tittle}</Text>
      {iconRight && iconRight}
    </Pressable>
  );
}
