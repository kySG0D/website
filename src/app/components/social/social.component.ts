import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  social : {icon:string, text:string, url: string}[]  = [
    {icon: "../../../assets/icons/instagram.svg", text: "Instagram", url: "https://www.instagram.com/alta__esports/"},
    {icon: "../../../assets/icons/tiktok.svg", text: "TikTok", url: "https://www.tiktok.com/@alta_rp_"},
    {icon: "../../../assets/icons/discord.svg", text: "Discord", url: "https://discord.gg/KDVxmbPyYE"},
  ];

  private defaultColor = "#ffffff"; // Cor padrão
  private hoverColor = "#ffc046";   // Cor de hover

  public openLinkInNewTab(url: string) {
    window.open(url, '_blank');
  }

  public onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.changeSVGColor(target, this.hoverColor);
    }
  }

  public onMouseOut(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    if (target) {
      this.changeSVGColor(target, this.defaultColor);
    }
  }

  private changeSVGColor(imgElement: HTMLImageElement, color: string) {
    const iconUrl = imgElement.getAttribute('data-icon');
    if (iconUrl) {
      fetch(iconUrl)
        .then(response => response.text())
        .then(svgText => {
          const updatedSVG = svgText.replace(/fill="#[0-9a-fA-F]{6}"/g, `fill="${color}"`);
          const base64SVG = 'data:image/svg+xml;base64,' + btoa(updatedSVG);
          imgElement.src = base64SVG;
        })
        .catch(error => console.error('Error fetching SVG:', error));
    }
  }
}
