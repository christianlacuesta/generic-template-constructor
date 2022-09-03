import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app.landing.component.html',
    styles: [`
        .videoFrame{
            width: 560px;
            height: 300px;
        }

        @media screen and (max-width: 960px) {
            .videoFrame{
                width: 300px;
            }
        }

    `]
})
export class AppLandingComponent {

    isMenuActive = false;

    @ViewChild('menu') menuViewChild: ElementRef;

    smoothScroll(id){
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    onMenuButtonClick(e) {
        let menu = this.menuViewChild.nativeElement;

        if (this.isMenuActive) {
            this.addClass(menu, 'fadeOutUp');
            this.isMenuActive = false;
        }
        else {
            this.addClass(menu, 'menu-active fadeInDown');
            this.isMenuActive = true;
        }
        e.preventDefault();
    }

    onMenuAnimationEnd() {
        let menu = this.menuViewChild.nativeElement;

        if (this.isMenuActive) {
            this.removeClass(menu, 'fadeInDown');
        }
        else {
            this.removeClass(menu, 'menu-active fadeOutUp');
        }
    }

    addClass(element, classNames) {
        let classNamesArr = classNames.split(' ');
        for (var i = 0; i < classNamesArr.length; i++) {
            let className = classNamesArr[i];
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        }
    }

    removeClass(element, classNames) {
        let classNamesArr = classNames.split(' ');
        for (var i = 0; i < classNamesArr.length; i++) {
            let className = classNamesArr[i];
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}
