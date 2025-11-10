import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import vendorsData from '../../../assets/data/vendors.json';
import { Router } from '@angular/router';

export interface Vendor {
  name: string;
  phone: string;
  service: string;
  description: string;
}

/**
 * VendorsComponent displays a searchable and filterable table of community vendors.
 * Features:
 * - Search by name, phone, or description
 * - Filter by service type
 * - Responsive table layout
 * - Click-to-call phone links
 * 
 * Route: /vendors
 */
@Component({
  selector: 'app-vendors',
  imports: [CommonModule, FormsModule],
  templateUrl: './vendors.component.html',
  styleUrl: './vendors.component.scss'
})
export class VendorsComponent implements OnInit {
  vendors: Vendor[] = [];
  filteredVendors: Vendor[] = [];
  searchTerm: string = '';
  selectedService: string = 'all';
  services: string[] = [];
  loading: boolean = false;

  constructor(  private router: Router,) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors(): void {
    this.vendors = vendorsData as Vendor[];
    this.filteredVendors = this.vendors;
    this.extractServices();
  }

  extractServices(): void {
    const serviceSet = new Set(this.vendors.map(v => v.service));
    this.services = Array.from(serviceSet).sort();
  }
goBack() {
    this.router.navigate(['/home']);
  }
  filterVendors(): void {
    this.filteredVendors = this.vendors.filter(vendor => {
      const matchesSearch = this.searchTerm === '' || 
        vendor.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        vendor.phone.includes(this.searchTerm) ||
        vendor.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesService = this.selectedService === 'all' || 
        vendor.service === this.selectedService;
      
      return matchesSearch && matchesService;
    });
  }

  onSearchChange(): void {
    this.filterVendors();
  }

  onServiceChange(): void {
    this.filterVendors();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedService = 'all';
    this.filteredVendors = this.vendors;
  }
}

