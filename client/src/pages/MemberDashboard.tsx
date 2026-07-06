import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Copy, DollarSign, Calendar, TrendingUp, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

export default function MemberDashboard() {
  const [email, setEmail] = useState("");
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupComplete, setLookupComplete] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Only fetch data after email is submitted
  const { data: statusData, isLoading: statusLoading } = trpc.membership.getStatus.useQuery(
    { email },
    { enabled: lookupComplete && email.length > 0 }
  );

  const { data: savingsData, isLoading: savingsLoading } = trpc.membership.getSavings.useQuery(
    { email },
    { enabled: lookupComplete && email.length > 0 }
  );

  const { data: schedulingData, isLoading: schedulingLoading } = trpc.membership.getSchedulingLink.useQuery(
    { email },
    { enabled: lookupComplete && email.length > 0 }
  );

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLookingUp(true);
    
    // Simulate lookup delay
    setTimeout(() => {
      setIsLookingUp(false);
      setLookupComplete(true);
    }, 500);
  };

  const handleCopyLink = () => {
    if (schedulingData?.schedulingLink) {
      navigator.clipboard.writeText(schedulingData.schedulingLink);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const formatCurrency = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="w-6 h-6 text-green-600" />;
      case "expired":
        return <AlertCircle className="w-6 h-6 text-orange-600" />;
      case "cancelled":
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-100 text-green-800 border-green-200",
      expired: "bg-orange-100 text-orange-800 border-orange-200",
      cancelled: "bg-red-100 text-red-800 border-red-200",
      none: "bg-gray-100 text-gray-800 border-gray-200",
    };

    return (
      <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${styles[status as keyof typeof styles] || styles.none}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Member Dashboard - View Your Membership & Savings"
        description="Access your Hero Handyman Pro membership dashboard. View your membership status and track your savings from discounts and priority service."
        keywords="member dashboard, membership status, handyman savings, priority service"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-800 to-cyan-900 text-white py-12 px-6">
        <div className="container max-w-[1120px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Member Dashboard
          </h1>
          <p className="text-lg text-teal-100">
            View your membership status and track your savings from discounts and priority service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container max-w-[900px] mx-auto">
          {!lookupComplete ? (
            // Email Lookup Form
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Access Your Membership</CardTitle>
                <p className="text-gray-600">
                  Enter the email address associated with your membership to view your dashboard
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLookup} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white text-lg py-6"
                    disabled={isLookingUp}
                  >
                    {isLookingUp ? "Looking up..." : "View My Dashboard"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Don't have a membership yet?{" "}
                    <Link href="/membership/" className="text-teal-700 hover:underline font-semibold">
                      Join now
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          ) : statusLoading || savingsLoading || schedulingLoading ? (
            // Loading State
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your membership details...</p>
            </div>
          ) : statusData?.status === "none" ? (
            // No Membership Found
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">No Membership Found</h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find an active membership associated with <strong>{email}</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/membership/">
                    <Button className="bg-teal-700 hover:bg-teal-800">
                      Join Now
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setLookupComplete(false);
                      setEmail("");
                    }}
                  >
                    Try Different Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Dashboard Content
            <div className="space-y-6">
              {/* Membership Status Card */}
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Membership Status</CardTitle>
                    {getStatusBadge(statusData?.status || "none")}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      {getStatusIcon(statusData?.status || "none")}
                      <div>
                        <p className="font-semibold text-lg mb-1">
                          {statusData?.status === "active" && "Your membership is active!"}
                          {statusData?.status === "expired" && "Your membership has expired"}
                          {statusData?.status === "cancelled" && "Your membership was cancelled"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {statusData?.membership?.memberName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {statusData?.membership?.memberEmail}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-semibold">
                          {statusData?.membership?.startDate && formatDate(statusData.membership.startDate)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">End Date:</span>
                        <span className="font-semibold">
                          {statusData?.membership?.endDate && formatDate(statusData.membership.endDate)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Member Since:</span>
                        <span className="font-semibold">
                          {statusData?.membership?.createdAt && formatDate(statusData.membership.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {statusData?.status === "expired" && (
                    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-sm text-orange-800 mb-3">
                        Your membership has expired. Renew now to continue enjoying priority service and savings!
                      </p>
                      <Link href="/membership/">
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Renew Membership
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>



              {/* Savings Tracker Card */}
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Your Savings Tracker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                      <DollarSign className="w-8 h-8 text-green-600 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Total Saved</p>
                      <p className="text-3xl font-bold text-green-600">
                        {formatCurrency(savingsData?.totalSaved || 0)}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                      <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Services Used</p>
                      <p className="text-3xl font-bold text-blue-600">
                        {savingsData?.serviceCount || 0}
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                      <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Avg Per Service</p>
                      <p className="text-3xl font-bold text-purple-600">
                        {savingsData?.serviceCount
                          ? formatCurrency(Math.round((savingsData.totalSaved || 0) / savingsData.serviceCount))
                          : "$0.00"}
                      </p>
                    </div>
                  </div>

                  {savingsData && savingsData.savings.length > 0 ? (
                    <div>
                      <h3 className="font-bold text-lg mb-4">Recent Services</h3>
                      <div className="space-y-3">
                        {savingsData.savings.map((saving, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold">{saving.serviceType}</p>
                                <p className="text-sm text-gray-600">
                                  {formatDate(saving.serviceDate)}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-green-600">
                                  {formatCurrency(saving.totalSaved)} saved
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Original Price:</span>
                                <span className="ml-2 font-semibold">
                                  {formatCurrency(saving.originalPrice)}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">15% Discount:</span>
                                <span className="ml-2 font-semibold text-green-600">
                                  -{formatCurrency(saving.discountAmount)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-2">No services recorded yet</p>
                      <p className="text-sm text-gray-500">
                        Your savings will appear here after you use your membership benefits
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setLookupComplete(false);
                    setEmail("");
                  }}
                  className="flex-1"
                >
                  View Different Account
                </Button>
                <Link href="/contact/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
