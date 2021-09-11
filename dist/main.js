(()=>{const e={baseUrl:"https://us-central1-js-capstone-backend.cloudfunctions.net/api",gameId:""};(async t=>{const n=await fetch(`${e.baseUrl}/games/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"My Amzing game"})}),s=(await n.json()).result.split(" ");e.gameId=s[s.length-2]})();document.getElementById("submit").addEventListener("click",(()=>{(async t=>{const n=await fetch(`${e.baseUrl}/games/${e.gameId}/scores/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});await n.json(),(()=>{const e=document.querySelector("input[type=name"),t=document.querySelector("input[type=number");e.value="",t.value=""})()})({user:document.querySelector("input[type=name").value,score:document.querySelector("input[type=number").value})}));document.getElementById("refresh").addEventListener("click",(()=>(async()=>{const t=await(async()=>(await fetch(`${e.baseUrl}/games/${e.gameId}/scores/`,{method:"GET",headers:{"Content-Type":"application/json"}})).json())(),n=document.getElementById("scores-table");n.innerHTML="",t.result.map((e=>{const t=n.insertRow(0),s=t.insertCell(0),a=t.insertCell(1);return s.innerHTML=e.user,a.innerHTML=e.score,{}}))})()))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQSxNQUFNQSxFQUFtQixDQUN2QkMsUUFBUyxpRUFDVEMsT0FBUSxJQVVTQyxPQUFPQyxJQUN4QixNQUFNQyxRQUFpQkMsTUFBTSxHQUFHTixFQUFpQkMsaUJBQWtCLENBQ2pFTSxPQUFRLE9BQ1JDLFFBQVMsQ0FDUCxlQUFnQixvQkFFbEJDLEtBQU1DLEtBQUtDLFVBQVUsQ0FBRVAsS0FTaEIscUJBTEhRLFNBRGdCUCxFQUFTUSxRQUNWQyxPQUFPQyxNQUFNLEtBQ2xDZixFQUFpQkUsT0FBU1UsRUFBS0EsRUFBS0ksT0FBUyxJQUkvQ0MsR0F5QkFDLFNBQ0dDLGVBQWUsVUFDZkMsaUJBQWlCLFNBQVMsS0F6QlpqQixPQUFPUyxJQUN0QixNQUFNUCxRQUFpQkMsTUFDckIsR0FBR04sRUFBaUJDLGlCQUFpQkQsRUFBaUJFLGlCQUN0RCxDQUNFSyxPQUFRLE9BQ1JDLFFBQVMsQ0FDUCxlQUFnQixvQkFFbEJDLEtBQU1DLEtBQUtDLFVBQVVDLFdBSW5CUCxFQUFTUSxPQXBDRyxNQUNsQixNQUFNUSxFQUFPSCxTQUFTSSxjQUFjLG1CQUM5QkMsRUFBUUwsU0FBU0ksY0FBYyxxQkFDckNELEVBQUtHLE1BQVEsR0FDYkQsRUFBTUMsTUFBUSxJQWlDZEMsSUFPQUMsQ0FBUyxDQUFFTCxLQUZFSCxTQUFTSSxjQUFjLG1CQUFtQkUsTUFFdENELE1BREhMLFNBQVNJLGNBQWMscUJBQXFCRSxXQW9DNUROLFNBQ0dDLGVBQWUsV0FDZkMsaUJBQWlCLFNBQVMsSUFoQlBqQixXQUNwQixNQUFNd0IsT0FmUXhCLGlCQUNTRyxNQUNyQixHQUFHTixFQUFpQkMsaUJBQWlCRCxFQUFpQkUsaUJBQ3RELENBQ0VLLE9BQVEsTUFDUkMsUUFBUyxDQUNQLGVBQWdCLHVCQUtOSyxPQUlNZSxHQUNoQkMsRUFBUVgsU0FBU0MsZUFBZSxnQkFDdENVLEVBQU1DLFVBQVksR0FDbEJILEVBQVFiLE9BQU9pQixLQUFLQyxJQUNsQixNQUFNQyxFQUFNSixFQUFNSyxVQUFVLEdBQ3RCQyxFQUFRRixFQUFJRyxXQUFXLEdBQ3ZCQyxFQUFRSixFQUFJRyxXQUFXLEdBRzdCLE9BRkFELEVBQU1MLFVBQVlFLEVBQUtYLEtBQ3ZCZ0IsRUFBTVAsVUFBWUUsRUFBS1QsTUFDaEIsT0FNd0JlLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlDb25maWd1cmF0aW9uID0ge1xuICBiYXNlVXJsOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGknLFxuICBnYW1lSWQ6ICcnLFxufTtcblxuY29uc3QgY2xlYW5GaWVsZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPW5hbWUnKTtcbiAgY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPW51bWJlcicpO1xuICB1c2VyLnZhbHVlID0gJyc7XG4gIHNjb3JlLnZhbHVlID0gJyc7XG59O1xuXG5jb25zdCBjcmVhdGVHYW1lID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlDb25maWd1cmF0aW9uLmJhc2VVcmx9L2dhbWVzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lIH0pLFxuICB9KTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBkYXRhID0gY29udGVudC5yZXN1bHQuc3BsaXQoJyAnKTtcbiAgYXBpQ29uZmlndXJhdGlvbi5nYW1lSWQgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMl07XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuY3JlYXRlR2FtZSgnTXkgQW16aW5nIGdhbWUnKTtcblxuY29uc3QgYWRkU2NvcmUgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke2FwaUNvbmZpZ3VyYXRpb24uYmFzZVVybH0vZ2FtZXMvJHthcGlDb25maWd1cmF0aW9uLmdhbWVJZH0vc2NvcmVzL2AsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSxcbiAgKTtcblxuICBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNsZWFuRmllbGRzKCk7XG4gIC8vIGhhbmRsZVJlZmVyc2goKTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZFNjb3JlID0gKCkgPT4ge1xuICBjb25zdCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1uYW1lJykudmFsdWU7XG4gIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1udW1iZXInKS52YWx1ZTtcbiAgYWRkU2NvcmUoeyB1c2VyLCBzY29yZSB9KTtcbn07XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZCgnc3VibWl0JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQWRkU2NvcmUoKSk7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7YXBpQ29uZmlndXJhdGlvbi5iYXNlVXJsfS9nYW1lcy8ke2FwaUNvbmZpZ3VyYXRpb24uZ2FtZUlkfS9zY29yZXMvYCxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBoYW5kbGVSZWZlcnNoID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZXMtdGFibGUnKTtcbiAgdGFibGUuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnRlbnQucmVzdWx0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygwKTtcbiAgICBjb25zdCBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApO1xuICAgIGNvbnN0IGNlbGwyID0gcm93Lmluc2VydENlbGwoMSk7XG4gICAgY2VsbDEuaW5uZXJIVE1MID0gaXRlbS51c2VyO1xuICAgIGNlbGwyLmlubmVySFRNTCA9IGl0ZW0uc2NvcmU7XG4gICAgcmV0dXJuIHt9O1xuICB9KTtcbn07XG5cbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaCcpXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVJlZmVyc2goKSk7XG4iXSwibmFtZXMiOlsiYXBpQ29uZmlndXJhdGlvbiIsImJhc2VVcmwiLCJnYW1lSWQiLCJhc3luYyIsIm5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJyZXN1bHQiLCJzcGxpdCIsImxlbmd0aCIsImNyZWF0ZUdhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZXIiLCJxdWVyeVNlbGVjdG9yIiwic2NvcmUiLCJ2YWx1ZSIsImNsZWFuRmllbGRzIiwiYWRkU2NvcmUiLCJjb250ZW50IiwiZ2V0RGF0YSIsInRhYmxlIiwiaW5uZXJIVE1MIiwibWFwIiwiaXRlbSIsInJvdyIsImluc2VydFJvdyIsImNlbGwxIiwiaW5zZXJ0Q2VsbCIsImNlbGwyIiwiaGFuZGxlUmVmZXJzaCJdLCJzb3VyY2VSb290IjoiIn0=