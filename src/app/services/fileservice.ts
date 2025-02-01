import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from "rxjs";
import defaultlist from "../../resources/words.json"

@Injectable({
    providedIn: 'root',
})
export class FileService {


    private selectedPageSubject = new ReplaySubject<any[]>(1);
    private selectedPage: any[] = defaultlist;

    setSelectedPageSubject(value: any[]){
        this.selectedPage = value;
        this.selectedPageSubject.next(this.selectedPage);
    }

    getSelectedPage(): Observable<any[]> {
        return this.selectedPageSubject;
    }

}