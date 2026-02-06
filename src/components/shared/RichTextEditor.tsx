import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { RichTextToolbar } from "./rich-text/RichTextToolbar";

interface RichTextEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
}

export function RichTextEditor({ 
  content = "", 
  onChange, 
  placeholder = "Start writing...",
  className 
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none min-h-[200px] px-4 py-3",
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChange?.(ed.getHTML());
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;
    
    const previousUrl = (editor as any).getAttributes("link").href;
    const url = window.prompt("Enter URL:", previousUrl);

    if (url === null) return;
    if (url === "") {
      (editor as any).chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    (editor as any).chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    
    const url = window.prompt("Enter image URL:");
    if (url) {
      (editor as any).chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={cn("rounded-md border border-input bg-background overflow-hidden", className)}>
      <RichTextToolbar editor={editor} onSetLink={setLink} onAddImage={addImage} />
      <EditorContent editor={editor} />
      <style>{`
        .ProseMirror {
          min-height: 200px;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          color: hsl(var(--muted-foreground));
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror h1 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .ProseMirror p {
          margin: 0.5rem 0;
        }
        .ProseMirror ul, .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror blockquote {
          border-left: 3px solid hsl(var(--border));
          padding-left: 1rem;
          margin: 0.5rem 0;
          color: hsl(var(--muted-foreground));
        }
        .ProseMirror code {
          background-color: hsl(var(--muted));
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        .ProseMirror pre {
          background-color: hsl(var(--muted));
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
        }
        .ProseMirror pre code {
          background: none;
          padding: 0;
        }
        .ProseMirror hr {
          border: none;
          border-top: 1px solid hsl(var(--border));
          margin: 1rem 0;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}