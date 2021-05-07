export interface BlogPostModel {
    id: string;
    title: string;
    content: string;
    created: Date;
    modified: Date;
    author: string;
    tags: string[];
}