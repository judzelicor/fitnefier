import React, { useEffect } from "react";
import { useDocumentTitle } from "../hooks";

function Base({ documentTitle, children }: {documentTitle: string, children: JSX.Element[]}) {
    useDocumentTitle(documentTitle);

    return (
        <>
            { children }
        </>
    )
}

export default Base;