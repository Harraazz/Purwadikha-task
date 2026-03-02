import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function Cform() {
  return (
    <section>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col justify-center space-y-6 p-6">
          <div>
            <h2 className="text-4xl font-bold">Let's Work Together</h2>
            <p className="text-muted-foreground mt-3 text-base">
              If you are interested in working together or have any questions,
              feel free to contact me through this form or via social media
              below.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-semibold">📧 Email:</span>
              <a
                href="mailto:your@email.com"
                className="text-primary hover:underline">
                your@email.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold">💻 GitHub:</span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-primary hover:underline">
                github.com/yourusername
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold">🔗 LinkedIn:</span>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-primary hover:underline">
                linkedin.com/in/yourusername
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold">📱 Instagram:</span>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="text-primary hover:underline">
                instagram.com/yourusername
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-6 p-6">
          <FieldGroup>
            <Field>
              <FieldLabel className="text-lg" htmlFor="fieldgroup-name">
                Name
              </FieldLabel>
              <Input
                id="fieldgroup-name"
                placeholder="Jordan Lee"
                className="h-14"
              />
            </Field>
            <Field>
              <FieldLabel className="text-lg" htmlFor="fieldgroup-message">
                Your Text
              </FieldLabel>
              <Input
                id="fieldgroup-message"
                placeholder="Hi, Im interesting to your portofolio"
                className="h-14"
              />
            </Field>
            <Field>
              <FieldLabel className="text-lg" htmlFor="fieldgroup-email">
                Email
              </FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
                className="h-14"
              />
              <FieldDescription>
                We&apos;ll send updates to this address.
              </FieldDescription>
            </Field>

            <Field orientation="horizontal">
              <Button type="reset" variant="outline">
                Reset
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </div>
      </div>
    </section>
  );
}

export default Cform;
