import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "@app/core/validators/email-pattern.validator";
import { patternValidator } from "@app/core/validators/patterm.validator";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "candy-subscribe-email",
  templateUrl: "./subscribe-email.component.html",
  styleUrls: ["./subscribe-email.component.scss"],
})
export class SubscribeEmailComponent {
  constructor(private modalService: NgbModal) {}

  public closeResult = "";

  public subscribeForm = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(30),
      patternValidator(/^[A-Za-z]+^/, "firstName"),
    ]),
    email: new FormControl(null, [
      Validators.required,
      emailValidator(),
      Validators.maxLength(30),
    ]),
  });

  public addSubscriber(): void {
    console.log(this.subscribeForm);
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
