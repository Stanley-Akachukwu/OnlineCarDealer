import { VehicleService } from '../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  makes: any = [];
  vehicle: any = {
    features: [],
    contact: {}
  };
  models: any = [];
  features: any = [];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getMakes().subscribe(
      makes => this.makes = makes
    );
    this.vehicleService.getFeatures().subscribe(
      features => this.features = features
    );
  }
  onMakeChange() {
    // tslint:disable-next-line:triple-equals
    const selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }
  onFeatureToggle(featureId, $event) {
    if ($event.target.checked)
    // tslint:disable-next-line:one-line
    {
      this.vehicle.features.push(featureId);
    } else
    // tslint:disable-next-line:one-line
    {
      const index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }
  submit() {
    this.vehicleService.create(this.vehicle).subscribe(x => console.log(x));
  }
}

