import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedBackContentStep";

export const feedbackTypes = {
    BUG: {
        title:'Problema',
        image:{
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }
    },
    IDEA: {
        title:'Ideia',
        image: {
            source:ideaImageUrl,
            alt:'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title:'Outro',
        image: {
            source:thoughtImageUrl,
            alt:'Imagem de uma balão de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType,setFeedbackType] =useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null)
    }
    return(
        <div className="bg-zinc-700 p-4 retalive rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ): (
                <FeedbackContentStep onFeedbackRestartRequested={handleRestartFeedback} feedbackType={feedbackType} />
            )}
            <footer className="text-xs text-neutral-400">
            Feito com ♥ pela Rocketseat
            </footer>
        </div>
    );
}