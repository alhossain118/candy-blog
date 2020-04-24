import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailService } from "@app/core/services/email.service";
import { emailValidator } from "@app/core/validators/email-pattern.validator";
import { patternValidator } from "@app/core/validators/patterm.validator";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "candy-subscribe-email",
  templateUrl: "./subscribe-email.component.html",
  styleUrls: ["./subscribe-email.component.scss"],
})
export class SubscribeEmailComponent {
  constructor(
    private modalService: NgbModal,
    private emailService: EmailService
  ) {}

  public closeResult = "";

  public subscribeForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(30),
      patternValidator(/^[A-Za-z]+$/, "firstName"),
    ]),
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
      firstName: this.subscribeForm.get("firstName").value,
      email: this.subscribeForm.get("email").value,
    };

    this.emailService.subscribeToList(formData).subscribe(
      (response) => {
        console.log("response received", response);
      },
      (error) => {
        console.error(error);
        console.log("error received", error);
      }
    );
  }

  public open(content): void {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
