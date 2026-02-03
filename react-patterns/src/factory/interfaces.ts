import React from "react"

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void
}

interface CardProps {
    children: React.ReactNode
}

export type ButtonComponent = React.FC<ButtonProps>
export type CardComponent =  React.FC<CardProps>


export interface UIAbstractFactory {
    createButton: () => ButtonComponent;
    createCard: () => CardComponent
}