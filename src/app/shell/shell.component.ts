import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as d3 from "d3";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements AfterViewInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {  }

  ngAfterViewInit(): void {
    var width = 1 << 7,
    height = 1 << 7;

    function diagram(selection, factors, size) {
      if (factors.length) {
        var n = factors.pop(),
            offset = n === 4 ? 45 : n === 2 ? 0 : -90,
            radius = n * size / (n + 2),
            δy = n & 1 ? (radius / 2) * (1 - Math.cos(Math.PI / n)) : 0;
        selection.selectAll("g")
            .data(d3.range(n))
          .enter().append("g")
            .attr("transform", function(d) {
              var angle = d * 360 / n + offset;
              return "translate(0," + δy + ")rotate(" + angle + ")translate(" + radius + ")rotate(" + -angle + ")";
            })
            .call(diagram, factors, 2 * size / (n + 2));
      } else selection.append("circle").attr("r", size * .9);
    }

    function primeFactors(n) {
      var factors = [],
          f;
      while (n > 1) {
        factors.push(f = factor(n));
        n /= f;
      }
      return factors;
    }

    function factor(n) {
      if (n % 4 === 0) return 4;
      for (var i = 2; i <= n / 2; i++) {
        if (n % i === 0) return i;
      }
      return n;
    }

var svg = d3.select("#vis").selectAll("svg")
    .data(d3.range(1, (1 << 7) + 1))
  .enter().append("svg")
    .attr("width", width)
    .attr("height", height);
svg.append("text")
    .attr("dy", "1em")
    .text(String);
svg.append("g")
    .attr("transform", "translate(" + [width / 2, height / 2] + ")")
    .each(function(d) {
      d3.select(this).call(diagram, primeFactors(d), width / 2);
    });
  }

}
