import { Directive, output, signal, WritableSignal } from "@angular/core";
import { BaseService } from "app/services/base-service";
import { BaseModel } from "model/base-model";

@Directive()
export abstract class BaseControl<Type extends BaseModel> {
  abstract service: BaseService<Type>;

  items = signal<Type[]>([]);

  itemEdit = signal<Type | null>(null);

  itemEditEmit = output<number>();

  getAllItems() {
    this.service?.getAll().subscribe((data) => {
      this.items.set(data);
    });
  }
  getItem(index: number, s: WritableSignal<Type | null>){
    this.service?.get(index).subscribe((data) => {
      s.set(data);
    })  
  }
  addItem(item: Type) {
    this.service?.create(item).subscribe(() => {
      this.getAllItems();
    });
  }
  setEditItem(index: number) {
    this.itemEdit.set(this.items()[index]);
    this.itemEditEmit.emit(this.items()[index].id);
  }
  editItem(item: Type) {
    this.service?.update(item.id, item).subscribe(() => {
      this.getAllItems();
    });
    this.itemEdit.set(null);
  }
  patchItem(id: number, item: any){
    this.service?.updatePatch(id, item).subscribe(() => {
      this.getAllItems();
    });
  }
  deleteItem(index: number) {
    let id = this.items()[index]["id"];
    this.service?.delete(id).subscribe(() => {
      this.getAllItems();
    });
    this.itemEdit.set(null);
  }
}
