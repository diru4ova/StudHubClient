import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseService} from './base-service';
import { Observable } from 'rxjs';
import { TeamPaginatedDTO } from '../model/teamPaginatedDTO.model';
import { Team } from '../model/team.model';
import { Delete } from '../model/delete.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('accessToken')}`
    })
  }

@Injectable({
    providedIn: 'root'
})
export class TeamService extends BaseService {

    constructor(protected http: HttpClient) {
        super(http);
        this.apiUrl += '/teams';
    }

    getAllTeams(paginationSettings: string): Observable<TeamPaginatedDTO> {
        return this.http.get<TeamPaginatedDTO>(`${this.apiUrl}` + paginationSettings);
    }

    getTeam(id: number): Observable<Team> {
        return this.http.get<Team>(`${this.apiUrl}/${id}`, httpOptions);
    }

    createTeam(team: Team): Observable<Team> {
        return this.http.post<Team>(`${this.apiUrl}/create`, team, httpOptions);
    }
    
    editTeam(id: number, team: Team): Observable<Team> {
        return this.http.put<Team>(`${this.apiUrl}/${id}`, team, httpOptions);
    }
      
    deleteTeam(id: number): Observable<Delete> {
        return this.http.delete<Delete>(`${this.apiUrl}/${id}`, httpOptions);
    }
}