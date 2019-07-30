import { Programmer } from '../programmers/programmer';

export class Project
{
    projectID: number;
    name: string;
    description: string;
    fullDescription: string;
    isCompleted: boolean;
    programmers: Programmer[];
}