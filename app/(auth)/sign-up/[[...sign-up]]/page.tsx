import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          card: "shadow-2xl border-none",
          headerTitle: "text-2xl font-bold tracking-tight overflow-hidden",
          headerSubtitle: "text-muted-foreground",
          formButtonPrimary: "bg-primary hover:bg-primary/90 transition-all text-sm h-11",
          socialButtonsBlockButton: "border-border hover:bg-muted/50 transition-all h-11",
          formFieldInput: "h-11 border-border focus:ring-primary/20",
          footerActionLink: "text-primary hover:text-primary/90 font-medium",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground font-medium",
        },
        layout: {
          socialButtonsPlacement: "bottom"
        }
      }}
    />
  );
}
