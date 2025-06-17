"use client"

import { useState } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  BarChart3,
  Thermometer,
  Package,
  AlertTriangle,
  Activity,
  Settings,
  Users,
  TrendingUp,
  Clock,
  Gauge,
  Beaker,
  Truck,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

const navigationItems = [
  { title: "Overview", icon: BarChart3, id: "overview" },
  { title: "Production", icon: Beaker, id: "production" },
  { title: "Quality Control", icon: CheckCircle, id: "quality" },
  { title: "Inventory", icon: Package, id: "inventory" },
  { title: "Equipment", icon: Settings, id: "equipment" },
  { title: "Distribution", icon: Truck, id: "distribution" },
  { title: "Analytics", icon: TrendingUp, id: "analytics" },
  { title: "Staff", icon: Users, id: "staff" },
]

export function BreweryDashboard() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <Beaker className="h-6 w-6 text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold">Brewery Control</h2>
                <p className="text-sm text-muted-foreground">Management System</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton onClick={() => setActiveSection(item.id)} isActive={activeSection === item.id}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">Golden Hops Brewery</span>
              <Badge variant="outline" className="text-green-600 border-green-600">
                <Activity className="h-3 w-3 mr-1" />
                Online
              </Badge>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Badge variant="destructive" className="animate-pulse">
                <AlertTriangle className="h-3 w-3 mr-1" />2 Alerts
              </Badge>
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Shift: Day (6:00 AM - 2:00 PM)
              </Button>
            </div>
          </header>

          <main className="flex-1 space-y-4 p-4">
            {activeSection === "overview" && <OverviewDashboard />}
            {activeSection === "production" && <ProductionDashboard />}
            {activeSection === "quality" && <QualityDashboard />}
            {activeSection === "inventory" && <InventoryDashboard />}
            {activeSection === "equipment" && <EquipmentDashboard />}
            {activeSection === "distribution" && <DistributionDashboard />}
            {activeSection === "analytics" && <AnalyticsDashboard />}
            {activeSection === "staff" && <StaffDashboard />}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

function OverviewDashboard() {
  return (
    <div className="space-y-6">
      {/* Alerts Section */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">System Overview</h2>
        <div className="grid gap-3">
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Critical Alert</AlertTitle>
            <AlertDescription className="text-red-700">
              Fermentation Tank #3 temperature exceeded threshold (78°F). Immediate attention required.
            </AlertDescription>
          </Alert>
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Warning</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Hop inventory running low. Current stock: 15 lbs remaining.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Daily Production</CardTitle>
            <Beaker className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">gallons brewed today</p>
            <Progress value={82} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Batches</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">currently fermenting</p>
            <div className="flex gap-1 mt-2">
              <Badge variant="secondary" className="text-xs">
                IPA: 3
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Lager: 5
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Equipment Status</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">94%</div>
            <p className="text-xs text-muted-foreground">operational efficiency</p>
            <div className="flex gap-1 mt-2">
              <Badge variant="outline" className="text-xs text-green-600">
                12 Online
              </Badge>
              <Badge variant="outline" className="text-xs text-red-600">
                1 Offline
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">98.2%</div>
            <p className="text-xs text-muted-foreground">batch approval rate</p>
            <Progress value={98} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Current Operations */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Fermentation Tanks</CardTitle>
            <CardDescription>Real-time monitoring of fermentation processes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { tank: "Tank #1", beer: "Golden IPA", temp: "68°F", progress: 75, status: "Normal" },
              { tank: "Tank #2", beer: "Wheat Beer", temp: "65°F", progress: 45, status: "Normal" },
              { tank: "Tank #3", beer: "Stout", temp: "78°F", progress: 60, status: "Alert" },
              { tank: "Tank #4", beer: "Pilsner", temp: "64°F", progress: 90, status: "Normal" },
            ].map((tank) => (
              <div key={tank.tank} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${tank.status === "Alert" ? "bg-red-500" : "bg-green-500"}`} />
                  <div>
                    <p className="font-medium">{tank.tank}</p>
                    <p className="text-sm text-muted-foreground">{tank.beer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    <span className={tank.status === "Alert" ? "text-red-600 font-medium" : ""}>{tank.temp}</span>
                  </div>
                  <Progress value={tank.progress} className="w-20 mt-1" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Planned operations and maintenance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { time: "08:00", task: "Start IPA Batch #127", status: "completed" },
              { time: "10:30", task: "Quality check - Wheat Beer", status: "completed" },
              { time: "14:00", task: "Tank #5 cleaning cycle", status: "in-progress" },
              { time: "16:00", task: "Hop delivery inspection", status: "pending" },
              { time: "18:00", task: "Equipment maintenance - Pump #3", status: "pending" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2">
                <div className="text-sm font-mono text-muted-foreground">{item.time}</div>
                <div className="flex-1">{item.task}</div>
                <Badge
                  variant={
                    item.status === "completed" ? "default" : item.status === "in-progress" ? "secondary" : "outline"
                  }
                  className="text-xs"
                >
                  {item.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                  {item.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                  {item.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProductionDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Production Monitoring</h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Brewing Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Mash Tun #1</span>
                <Badge variant="secondary">Mashing</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Kettle #2</span>
                <Badge variant="default">Boiling</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Fermenter #3</span>
                <Badge variant="outline">Cooling</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Temperature Control</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { location: "Mash Tun", temp: "152°F", target: "150°F", status: "normal" },
                { location: "Fermentation", temp: "68°F", target: "65°F", status: "warning" },
                { location: "Cold Storage", temp: "38°F", target: "38°F", status: "normal" },
              ].map((item) => (
                <div key={item.location} className="flex justify-between items-center">
                  <span className="text-sm">{item.location}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${item.status === "warning" ? "text-yellow-600" : "text-green-600"}`}>
                      {item.temp}
                    </span>
                    <span className="text-xs text-muted-foreground">({item.target})</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Batch Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>IPA Batch #127</span>
                  <span>Day 5/14</span>
                </div>
                <Progress value={35} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Lager Batch #89</span>
                  <span>Day 12/21</span>
                </div>
                <Progress value={57} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Wheat Batch #45</span>
                  <span>Day 8/10</span>
                </div>
                <Progress value={80} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Production Metrics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Production Timeline</CardTitle>
            <CardDescription>Current brewing operations schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "06:00", process: "Mash In - IPA Batch #128", duration: "90 min", status: "active" },
                { time: "08:30", process: "Boil Start - Wheat Batch #46", duration: "60 min", status: "scheduled" },
                {
                  time: "10:00",
                  process: "Transfer to Fermenter - Lager #90",
                  duration: "30 min",
                  status: "scheduled",
                },
                { time: "12:00", process: "Dry Hop Addition - IPA #125", duration: "15 min", status: "scheduled" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${item.status === "active" ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}
                    />
                    <div>
                      <p className="font-medium text-sm">{item.process}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.time} • {item.duration}
                      </p>
                    </div>
                  </div>
                  <Badge variant={item.status === "active" ? "default" : "outline"} className="text-xs">
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recipe Management</CardTitle>
            <CardDescription>Active brewing recipes and formulations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Golden IPA", batch: "#127", abv: "6.2%", ibu: "65", srm: "8" },
                { name: "Wheat Beer", batch: "#45", abv: "4.8%", ibu: "15", srm: "4" },
                { name: "Imperial Stout", batch: "#23", abv: "9.1%", ibu: "45", srm: "35" },
              ].map((recipe) => (
                <div key={recipe.batch} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{recipe.name}</p>
                      <p className="text-sm text-muted-foreground">Batch {recipe.batch}</p>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-1 bg-gray-50 rounded">
                      <p className="font-medium">{recipe.abv}</p>
                      <p className="text-muted-foreground">ABV</p>
                    </div>
                    <div className="text-center p-1 bg-gray-50 rounded">
                      <p className="font-medium">{recipe.ibu}</p>
                      <p className="text-muted-foreground">IBU</p>
                    </div>
                    <div className="text-center p-1 bg-gray-50 rounded">
                      <p className="font-medium">{recipe.srm}</p>
                      <p className="text-muted-foreground">SRM</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function QualityDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quality Control</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { batch: "IPA #127", ph: "4.2", gravity: "1.048", alcohol: "5.2%", status: "pass" },
                { batch: "Lager #89", ph: "4.1", gravity: "1.045", alcohol: "4.8%", status: "pass" },
                { batch: "Wheat #45", ph: "4.5", gravity: "1.052", alcohol: "5.5%", status: "review" },
              ].map((test) => (
                <div key={test.batch} className="border rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{test.batch}</span>
                    <Badge variant={test.status === "pass" ? "default" : "secondary"}>
                      {test.status === "pass" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertCircle className="h-3 w-3 mr-1" />
                      )}
                      {test.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>pH: {test.ph}</div>
                    <div>SG: {test.gravity}</div>
                    <div>ABV: {test.alcohol}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Batch Success Rate</span>
                  <span>98.2%</span>
                </div>
                <Progress value={98} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>On-Time Completion</span>
                  <span>94.5%</span>
                </div>
                <Progress value={95} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Quality Score</span>
                  <span>96.8%</span>
                </div>
                <Progress value={97} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Quality Analysis */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Laboratory Schedule</CardTitle>
            <CardDescription>Upcoming quality control tests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "09:00", test: "Microbiological Analysis", batch: "IPA #127", priority: "high" },
                { time: "11:30", test: "Alcohol Content Verification", batch: "Lager #89", priority: "medium" },
                { time: "14:00", test: "Color Analysis (SRM)", batch: "Wheat #45", priority: "low" },
                { time: "16:00", test: "Hop Oil Analysis", batch: "IPA #128", priority: "medium" },
              ].map((test, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <p className="font-medium text-sm">{test.test}</p>
                    <p className="text-xs text-muted-foreground">
                      {test.time} • {test.batch}
                    </p>
                  </div>
                  <Badge
                    variant={
                      test.priority === "high" ? "destructive" : test.priority === "medium" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {test.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sensory Evaluation</CardTitle>
            <CardDescription>Taste panel results and feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { beer: "Golden IPA", aroma: 8.5, flavor: 9.2, appearance: 8.8, overall: 8.8 },
                { beer: "Wheat Beer", aroma: 7.9, flavor: 8.1, appearance: 8.5, overall: 8.2 },
                { beer: "Stout", aroma: 9.1, flavor: 8.9, appearance: 9.3, overall: 9.1 },
              ].map((evaluation) => (
                <div key={evaluation.beer} className="p-3 border rounded-lg">
                  <p className="font-medium mb-2">{evaluation.beer}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span>Aroma:</span>
                      <span className="font-medium">{evaluation.aroma}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flavor:</span>
                      <span className="font-medium">{evaluation.flavor}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Appearance:</span>
                      <span className="font-medium">{evaluation.appearance}/10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overall:</span>
                      <span className="font-medium text-green-600">{evaluation.overall}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function InventoryDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Inventory Management</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { item: "Cascade Hops", current: 15, min: 20, unit: "lbs", status: "low", supplier: "Hop Growers Inc." },
          { item: "Pilsner Malt", current: 450, min: 200, unit: "lbs", status: "good", supplier: "Malt Co." },
          { item: "Wheat Malt", current: 180, min: 150, unit: "lbs", status: "good", supplier: "Grain Supply" },
          { item: "Yeast (Ale)", current: 8, min: 10, unit: "packets", status: "low", supplier: "Yeast Labs" },
          { item: "Bottles (12oz)", current: 2400, min: 1000, unit: "units", status: "good", supplier: "Glass Works" },
          { item: "Labels", current: 850, min: 500, unit: "sheets", status: "good", supplier: "Print Shop" },
        ].map((item) => (
          <Card key={item.item}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{item.item}</CardTitle>
              <CardDescription className="text-xs">{item.supplier}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold">{item.current}</span>
                  <span className="text-sm text-muted-foreground">{item.unit}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Minimum: {item.min}</span>
                  <Badge variant={item.status === "low" ? "destructive" : "default"}>{item.status}</Badge>
                </div>
                <Progress
                  value={(item.current / (item.min * 2)) * 100}
                  className={item.status === "low" ? "bg-red-100" : ""}
                />
                {item.status === "low" && (
                  <Button size="sm" className="w-full mt-2">
                    Reorder Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Purchase Orders and Deliveries */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Purchase Orders</CardTitle>
            <CardDescription>Pending and completed orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  po: "PO-2024-001",
                  supplier: "Hop Growers Inc.",
                  item: "Cascade Hops",
                  qty: "50 lbs",
                  status: "delivered",
                  date: "2024-01-15",
                },
                {
                  po: "PO-2024-002",
                  supplier: "Yeast Labs",
                  item: "Ale Yeast",
                  qty: "20 packets",
                  status: "pending",
                  date: "2024-01-18",
                },
                {
                  po: "PO-2024-003",
                  supplier: "Glass Works",
                  item: "12oz Bottles",
                  qty: "5000 units",
                  status: "shipped",
                  date: "2024-01-20",
                },
              ].map((order) => (
                <div key={order.po} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{order.po}</p>
                    <p className="text-xs text-muted-foreground">{order.supplier}</p>
                    <p className="text-xs">
                      {order.item} • {order.qty}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        order.status === "delivered" ? "default" : order.status === "shipped" ? "secondary" : "outline"
                      }
                      className="text-xs mb-1"
                    >
                      {order.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Alerts</CardTitle>
            <CardDescription>Items requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Alert className="border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertTitle className="text-red-800 text-sm">Critical Stock Level</AlertTitle>
                <AlertDescription className="text-red-700 text-xs">
                  Cascade Hops: Only 15 lbs remaining (Min: 20 lbs)
                </AlertDescription>
              </Alert>
              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-800 text-sm">Low Stock Warning</AlertTitle>
                <AlertDescription className="text-yellow-700 text-xs">
                  Ale Yeast: 8 packets remaining (Min: 10 packets)
                </AlertDescription>
              </Alert>
              <Alert className="border-blue-200 bg-blue-50">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800 text-sm">Delivery Scheduled</AlertTitle>
                <AlertDescription className="text-blue-700 text-xs">
                  Bottles delivery expected tomorrow at 10:00 AM
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function EquipmentDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Equipment Status</h2>

      <div className="grid gap-4">
        {[
          {
            name: "Mash Tun #1",
            status: "operational",
            temp: "152°F",
            runtime: "4h 23m",
            efficiency: 98,
            lastMaintenance: "2024-01-10",
          },
          {
            name: "Fermentation Tank #3",
            status: "alert",
            temp: "78°F",
            runtime: "72h 15m",
            efficiency: 85,
            lastMaintenance: "2024-01-05",
          },
          {
            name: "Cooling System",
            status: "operational",
            temp: "38°F",
            runtime: "24h 00m",
            efficiency: 95,
            lastMaintenance: "2024-01-12",
          },
          {
            name: "Bottling Line",
            status: "maintenance",
            temp: "N/A",
            runtime: "0h 00m",
            efficiency: 0,
            lastMaintenance: "2024-01-16",
          },
          {
            name: "Pump #2",
            status: "operational",
            temp: "N/A",
            runtime: "8h 45m",
            efficiency: 92,
            lastMaintenance: "2024-01-08",
          },
        ].map((equipment) => (
          <Card key={equipment.name}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      equipment.status === "operational"
                        ? "bg-green-500"
                        : equipment.status === "alert"
                          ? "bg-red-500"
                          : "bg-yellow-500"
                    }`}
                  />
                  <div>
                    <h3 className="font-medium">{equipment.name}</h3>
                    <p className="text-sm text-muted-foreground">Runtime: {equipment.runtime}</p>
                    <p className="text-xs text-muted-foreground">Last maintenance: {equipment.lastMaintenance}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {equipment.temp !== "N/A" && (
                    <div className="flex items-center gap-1">
                      <Thermometer className="h-4 w-4" />
                      <span className={equipment.status === "alert" ? "text-red-600 font-medium" : ""}>
                        {equipment.temp}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Gauge className="h-4 w-4" />
                    <span>{equipment.efficiency}%</span>
                  </div>
                  <Badge
                    variant={
                      equipment.status === "operational"
                        ? "default"
                        : equipment.status === "alert"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {equipment.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Maintenance Schedule */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
            <CardDescription>Upcoming maintenance tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { equipment: "Mash Tun #2", task: "Deep Clean & Sanitize", date: "2024-01-22", priority: "high" },
                { equipment: "Pump #1", task: "Seal Replacement", date: "2024-01-25", priority: "medium" },
                { equipment: "Cooling Coils", task: "Descaling", date: "2024-01-28", priority: "low" },
                { equipment: "Bottling Line", task: "Calibration Check", date: "2024-01-30", priority: "medium" },
              ].map((maintenance, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <p className="font-medium text-sm">{maintenance.equipment}</p>
                    <p className="text-xs text-muted-foreground">{maintenance.task}</p>
                    <p className="text-xs text-muted-foreground">{maintenance.date}</p>
                  </div>
                  <Badge
                    variant={
                      maintenance.priority === "high"
                        ? "destructive"
                        : maintenance.priority === "medium"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {maintenance.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipment Performance</CardTitle>
            <CardDescription>Efficiency trends and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Brewing Equipment", efficiency: 96, trend: "+2%" },
                { category: "Fermentation Systems", efficiency: 94, trend: "-1%" },
                { category: "Packaging Line", efficiency: 89, trend: "+5%" },
                { category: "Utilities", efficiency: 92, trend: "0%" },
              ].map((category) => (
                <div key={category.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{category.category}</span>
                    <div className="flex items-center gap-2">
                      <span>{category.efficiency}%</span>
                      <span
                        className={`text-xs ${category.trend.startsWith("+") ? "text-green-600" : category.trend.startsWith("-") ? "text-red-600" : "text-gray-600"}`}
                      >
                        {category.trend}
                      </span>
                    </div>
                  </div>
                  <Progress value={category.efficiency} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DistributionDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Distribution & Shipping</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { order: "#ORD-001", customer: "Downtown Pub", cases: 24, status: "ready", dueDate: "2024-01-18" },
                {
                  order: "#ORD-002",
                  customer: "City Restaurant",
                  cases: 12,
                  status: "packaging",
                  dueDate: "2024-01-19",
                },
                { order: "#ORD-003", customer: "Beer Store", cases: 48, status: "pending", dueDate: "2024-01-20" },
                { order: "#ORD-004", customer: "Sports Bar", cases: 36, status: "ready", dueDate: "2024-01-18" },
              ].map((order) => (
                <div key={order.order} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">{order.order}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">Due: {order.dueDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.cases} cases</p>
                    <Badge
                      variant={
                        order.status === "ready" ? "default" : order.status === "packaging" ? "secondary" : "outline"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Delivery Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "09:00", route: "Downtown Route", driver: "Mike", orders: 3, status: "completed" },
                { time: "11:30", route: "North Side", driver: "Sarah", orders: 2, status: "in-transit" },
                { time: "14:00", route: "Suburbs", driver: "Tom", orders: 4, status: "scheduled" },
                { time: "16:30", route: "Industrial District", driver: "Lisa", orders: 2, status: "scheduled" },
              ].map((delivery) => (
                <div key={delivery.time} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <p className="font-medium">
                      {delivery.time} - {delivery.route}
                    </p>
                    <p className="text-sm text-muted-foreground">Driver: {delivery.driver}</p>
                    <p className="text-xs text-muted-foreground">{delivery.orders} orders</p>
                  </div>
                  <Badge
                    variant={
                      delivery.status === "completed"
                        ? "default"
                        : delivery.status === "in-transit"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {delivery.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shipping Analytics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Today's Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-sm text-muted-foreground">cases shipped</p>
            <div className="text-sm text-green-600 mt-1">+18% vs yesterday</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">On-Time Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">96.5%</div>
            <p className="text-sm text-muted-foreground">this month</p>
            <Progress value={96.5} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4.8/5</div>
            <p className="text-sm text-muted-foreground">average rating</p>
            <div className="text-sm text-green-600 mt-1">+0.2 vs last month</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics & Reports</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Production</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,420</div>
            <p className="text-sm text-muted-foreground">gallons this month</p>
            <div className="text-sm text-green-600 mt-1">+12% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$48,250</div>
            <p className="text-sm text-muted-foreground">this month</p>
            <div className="text-sm text-green-600 mt-1">+8% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-sm text-muted-foreground">overall efficiency</p>
            <div className="text-sm text-green-600 mt-1">+2% vs last month</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Waste Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1%</div>
            <p className="text-sm text-muted-foreground">waste percentage</p>
            <div className="text-sm text-green-600 mt-1">-0.5% vs last month</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Production Trends</CardTitle>
            <CardDescription>Monthly production by beer type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "IPA", production: 6200, percentage: 40, trend: "+15%" },
                { type: "Lager", production: 4650, percentage: 30, trend: "+8%" },
                { type: "Wheat Beer", production: 3100, percentage: 20, trend: "+12%" },
                { type: "Stout", production: 1550, percentage: 10, trend: "+5%" },
              ].map((beer) => (
                <div key={beer.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{beer.type}</span>
                    <div className="flex items-center gap-2">
                      <span>{beer.production} gal</span>
                      <span className="text-green-600 text-xs">{beer.trend}</span>
                    </div>
                  </div>
                  <Progress value={beer.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Analysis</CardTitle>
            <CardDescription>Production costs breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Raw Materials", cost: 18500, percentage: 45, change: "+3%" },
                { category: "Labor", cost: 12300, percentage: 30, change: "+1%" },
                { category: "Utilities", cost: 6150, percentage: 15, change: "-2%" },
                { category: "Packaging", cost: 4100, percentage: 10, change: "+5%" },
              ].map((cost) => (
                <div key={cost.category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{cost.category}</span>
                    <div className="flex items-center gap-2">
                      <span>${cost.cost.toLocaleString()}</span>
                      <span className={`text-xs ${cost.change.startsWith("+") ? "text-red-600" : "text-green-600"}`}>
                        {cost.change}
                      </span>
                    </div>
                  </div>
                  <Progress value={cost.percentage} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Indicators</CardTitle>
          <CardDescription>Monthly performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: "Batch Cycle Time", value: "14.2 days", target: "14 days", status: "warning" },
              { metric: "First Pass Yield", value: "98.5%", target: "95%", status: "good" },
              { metric: "Equipment Uptime", value: "96.8%", target: "95%", status: "good" },
              { metric: "Customer Complaints", value: "0.2%", target: "<1%", status: "good" },
            ].map((kpi) => (
              <div key={kpi.metric} className="p-3 border rounded-lg">
                <p className="text-sm font-medium">{kpi.metric}</p>
                <p className="text-2xl font-bold mt-1">{kpi.value}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-muted-foreground">Target: {kpi.target}</p>
                  <Badge variant={kpi.status === "good" ? "default" : "secondary"} className="text-xs">
                    {kpi.status === "good" ? (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    )}
                    {kpi.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StaffDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Staff Management</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Shift</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                {
                  name: "John Smith",
                  role: "Brewmaster",
                  status: "on-duty",
                  location: "Production Floor",
                  shift: "Day",
                },
                { name: "Sarah Johnson", role: "Quality Control", status: "on-duty", location: "Lab", shift: "Day" },
                { name: "Mike Wilson", role: "Packaging", status: "break", location: "Break Room", shift: "Day" },
                {
                  name: "Lisa Brown",
                  role: "Maintenance",
                  status: "on-duty",
                  location: "Equipment Room",
                  shift: "Day",
                },
              ].map((staff) => (
                <div key={staff.name} className="flex justify-between items-center p-3 border rounded">
                  <div>
                    <p className="font-medium">{staff.name}</p>
                    <p className="text-sm text-muted-foreground">{staff.role}</p>
                    <p className="text-xs text-muted-foreground">{staff.shift} Shift</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={staff.status === "on-duty" ? "default" : "secondary"}>{staff.status}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{staff.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shift Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                <div>
                  <span className="font-medium">Day Shift (6:00 AM - 2:00 PM)</span>
                  <p className="text-sm text-muted-foreground">4 staff members</p>
                </div>
                <Badge>Current</Badge>
              </div>
              <div className="flex justify-between items-center p-3 border rounded">
                <div>
                  <span>Evening Shift (2:00 PM - 10:00 PM)</span>
                  <p className="text-sm text-muted-foreground">3 staff members</p>
                </div>
                <Badge variant="outline">Next</Badge>
              </div>
              <div className="flex justify-between items-center p-3 border rounded">
                <div>
                  <span>Night Shift (10:00 PM - 6:00 AM)</span>
                  <p className="text-sm text-muted-foreground">2 staff members</p>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staff Performance and Training */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Training Schedule</CardTitle>
            <CardDescription>Upcoming training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "2024-01-22", training: "Safety Protocols Update", attendees: 8, instructor: "Safety Officer" },
                { date: "2024-01-25", training: "New Equipment Operation", attendees: 4, instructor: "Technical Lead" },
                { date: "2024-01-28", training: "Quality Control Procedures", attendees: 6, instructor: "QC Manager" },
              ].map((session, index) => (
                <div key={index} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <p className="font-medium text-sm">{session.training}</p>
                    <p className="text-xs text-muted-foreground">
                      {session.date} • {session.instructor}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {session.attendees} attendees
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Staff productivity and safety</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Productivity Score</span>
                  <span>94.2%</span>
                </div>
                <Progress value={94} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Safety Compliance</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Training Completion</span>
                  <span>87.5%</span>
                </div>
                <Progress value={87.5} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Attendance Rate</span>
                  <span>96.8%</span>
                </div>
                <Progress value={96.8} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certifications and Compliance */}
      <Card>
        <CardHeader>
          <CardTitle>Certifications & Compliance</CardTitle>
          <CardDescription>Staff certifications and renewal dates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { name: "John Smith", cert: "Master Brewer Certification", expires: "2024-06-15", status: "valid" },
              { name: "Sarah Johnson", cert: "Food Safety Certification", expires: "2024-03-20", status: "expiring" },
              { name: "Mike Wilson", cert: "Forklift Operation License", expires: "2024-08-10", status: "valid" },
              { name: "Lisa Brown", cert: "Electrical Safety Training", expires: "2024-02-28", status: "expiring" },
            ].map((cert) => (
              <div key={`${cert.name}-${cert.cert}`} className="flex justify-between items-center p-2 border rounded">
                <div>
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.cert}</p>
                  <p className="text-xs text-muted-foreground">Expires: {cert.expires}</p>
                </div>
                <Badge variant={cert.status === "valid" ? "default" : "destructive"} className="text-xs">
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
