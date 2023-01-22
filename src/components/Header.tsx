import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LowerHeader } from "./header/LowerHeader";
import { UpperHeader } from "./header/UpperHeader";
import { Input } from "./Input";

export function Header({setPesquisa}: {setPesquisa: React.Dispatch<React.SetStateAction<string>>}) {


  return (
    <>
        <UpperHeader setPesquisa={setPesquisa} /> 
        <LowerHeader />
    </>
  );
}