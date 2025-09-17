import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { Mail, MessageSquareText, Phone, User, UserPen } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  nom: z.string({ error: "Veuillez spécifier un nom" })
    .min(2, { error: "Le nom doit faire plus de 2 charactères" })
    .max(256, { error: "Le nom doit faire moins de 256 charactères" }),
  prenom: z.string({ error: "Veuillez spécifier un prénom" })
    .min(2, { error: "Le prénom doit faire plus de 2 charactères" })
    .max(256, { error: "Le prénom doit faire moins de 256 charactères" }),
  mail: z.email().optional(),
  phone: z.string().optional(),
  message: z.string({error: "Veuillez spécifier votre demande"}).
    min(32, {error: "Le message doit faire plus de 32 charactères"})
    .max(2048, {error: "Le message ne doit pas faire plus de 2048 charactères"}),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO
    console.log(values);
  }

  return (<section id="contact" className="grid grid-cols-1 gap-4">
    <h2 className="
      basis-full
      text-center md:text-justify
      text-4xl md:text-6xl
      text-white
    ">
      Contact
    </h2>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-card/80 backdrop-blur-3xl p-8 rounded-2xl border"
      >
        <div className="
          grid grid-cols-2 gap-4 mb-8
        ">
          <FormField
            control={form.control}
            name="nom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground" ><User /> Nom *</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="..." {...field} className="
                    text-card-foreground
                  "/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="prenom"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground"><UserPen /> Prénom *</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="..." {...field} className="
                    text-card-foreground
                  "/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground" ><Mail /> Mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="..." {...field} className="
                    text-card-foreground
                  "/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-card-foreground" ><Phone /> Tél</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="..." {...field} className="
                    text-card-foreground
                  "/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel className="text-card-foreground" ><MessageSquareText /> Message *</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Spécifier les informations concernant votre demande..."
                    className="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="
          flex items-center justify-center
          gap-2
        ">
          <Button type="reset" size="lg" variant="outline" className="text-foreground">
            Annuler
          </Button>
          <Button type="submit" size="lg" variant="default" >
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  </section>);
}