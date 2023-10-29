import { useEffect, useState } from "react";
import ChooseFileForm from "./components/ChooseFileForm.tsx";
import { themeConvertor } from "./ThemeConvertor.ts";

export default function ConvertorPage() {
  const [themeFile, setThemeFile] = useState();

  useEffect(() => {
    if (!themeFile) return;
    themeConvertor.processFile(themeFile);
  }, [themeFile]);

  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <ChooseFileForm setThemeFile={setThemeFile} />
    </article>
  );
}
