import ChooseFileDialog from "./components/ChooseFileDialog.tsx";

export default function MainPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <ChooseFileDialog />
    </article>
  );
}
