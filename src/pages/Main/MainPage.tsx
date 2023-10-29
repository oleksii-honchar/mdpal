import ChooseFileForm from "./components/ChooseFileForm.tsx";

export default function MainPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <ChooseFileForm />
    </article>
  );
}
