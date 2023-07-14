import React from 'react';
import {generateVideoEmbed} from "@/app/[lang]/utils/embed";

interface VideoProps {
    url: string;
    title?: string;
    name?: string;
    className?: string
}

export default function VVideo({url, title, name, className}: VideoProps) {
    return (
        <div className={className}>
            <iframe
                className="w-full aspect-video"
                id={name}
                loading="lazy"
                src={generateVideoEmbed(url)}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={title}
            ></iframe>
        </div>
    );
};