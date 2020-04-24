import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "@app/core/services/email.service";
import { emailValidator } from "@app/core/validators/email-pattern.validator";
import swal from "sweetalert2";
@Component({
  selector: "candy-subscribe-email",
  templateUrl: "./subscribe-email.component.html",
  styleUrls: ["./subscribe-email.component.scss"],
})
export class SubscribeEmailComponent {
  constructor(
    private emailService: EmailService
  ) {}

  public closeResult = "";

  public subscribeForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      emailValidator(),
      Validators.maxLength(30),
    ]),
  });

  public addSubscriber(): void {
    console.log(this.subscribeForm);
    if (this.subscribeForm.invalid) {
      return;
    }

    const formData = {
      email: this.subscribeForm.get("email").value,
    };

    this.emailService.subscribeToList(formData).subscribe(
      (response) => {
        console.log("response received", response);
        if (response && response.result === "error") {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong 😞",
          });
        } else {
          swal.fire({
            icon: "success",
            title: "Thanks for subscribing 😊",
            text:
              "Get ready for all sorts of candy goodness delivered straight to your inbox",
          });
        }
      },
      (error) => {
        console.error(error);
        console.log("error received", error);
      }
    );
  }
}
