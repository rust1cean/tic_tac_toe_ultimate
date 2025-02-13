import { Board } from "@/widgets/board";

export default function Game() {
  return (
    <div className="size-full select-none flex items-center justify-center flex-col p-[10vmax] pt-[12.5vmax] pb-[7.5vmax]">
      <Board />
    </div>
  );
}
